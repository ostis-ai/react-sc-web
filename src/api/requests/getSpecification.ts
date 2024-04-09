import { searchAddrById } from '@api/sc/search/search';
import { ScAddr, ScConstruction, ScTemplate, ScType } from 'ts-sc-client';
import { client, scUtils } from '@api/sc';
import { CardComponentType } from '@components/Card/types';
import { InstallMethodType } from '@components/CardInfo/types';

export const findSpecifiactions = async () => {
  const initiatidAgentStuct = await initiateComponentSearchAgent();
  if (!initiatidAgentStuct) return [];

  let agentResult: ScAddr | undefined = undefined;
  await Promise.all(
    initiatidAgentStuct.map(async (answerNode) => {
      const currentAgentResult = await getAgentResult(answerNode);
      if (currentAgentResult) {
        agentResult = currentAgentResult;
      }
    }),
  );
  if (!agentResult) return [];

  const specifications = await getSpecifications(agentResult);
  return specifications;
};

const initiateComponentSearchAgent = async () => {
  const construction = new ScConstruction();
  const questionNode = '_question_node';
  const actionComponentsSearch = await searchAddrById('action_components_search');
  const question = await searchAddrById('question');
  const questionInitiated = await searchAddrById('question_initiated');
  if (!question || !actionComponentsSearch || !questionInitiated) return;

  construction.createNode(ScType.NodeConst, questionNode);
  construction.createEdge(ScType.EdgeAccessConstPosPerm, question, questionNode);
  construction.createEdge(ScType.EdgeAccessConstPosPerm, actionComponentsSearch, questionNode);
  construction.createEdge(ScType.EdgeAccessConstPosPerm, questionInitiated, questionNode);
  const result = await client.createElements(construction);
  return result;
};

const getAgentResult = async (answerNode: ScAddr) => {
  const { nrelAnswer } = await scUtils.findKeynodes('nrel_answer');
  if (!nrelAnswer) return;
  const template = new ScTemplate();
  const answerAlias = '_answer';
  template.tripleWithRelation(
    answerNode,
    ScType.EdgeDCommonVar,
    [ScType.NodeVarStruct, answerAlias],
    ScType.EdgeAccessVarPosPerm,
    nrelAnswer,
  );
  const result = await client.templateSearch(template);
  const answerScAddr = result.length ? result[0].get(answerAlias) : undefined;
  return answerScAddr;
};

const getSpecifications = async (agentResult: ScAddr) => {
  const template = new ScTemplate();
  const answerAlias = '_answer';
  template.triple(agentResult, ScType.EdgeAccessVarPosPerm, [ScType.NodeVarStruct, answerAlias]);
  const result = await client.templateSearch(template);
  const components = result.map((tuple) => tuple.get(answerAlias));
  return components;
};

export const getComponent = async (specification: ScAddr) => {
  const template = new ScTemplate();
  const componentAlias = '_component';
  const { conceptReusableComponent } = await scUtils.findKeynodes('concept_reusable_component');
  template.triple(specification, ScType.EdgeAccessVarPosPerm, [ScType.NodeVar, componentAlias]);
  template.triple(conceptReusableComponent, ScType.EdgeAccessVarPosPerm, [
    ScType.NodeVar,
    componentAlias,
  ]);
  const result = await client.templateSearch(template);
  if (!result.length) {
    const errorStr = `Cannot find component of sepecification with ScAddr ${specification.value}`;
    console.error(errorStr);
    throw Error(errorStr);
  }
  return result[0].get(componentAlias);
};

export const findComponentGit = async (component: ScAddr) => {
  const template = new ScTemplate();
  const { nrelComponentAddress } = await scUtils.findKeynodes('nrel_component_address');
  const gitAlias = '_git';
  template.tripleWithRelation(
    component,
    ScType.EdgeDCommonVar,
    [ScType.LinkVar, gitAlias],
    ScType.EdgeAccessVarPosPerm,
    nrelComponentAddress,
  );
  const result = await client.templateSearch(template);
  const gitScAddr = result.length ? result[0].get(gitAlias) : undefined;

  if (!gitScAddr) return undefined;

  const linkContents = await client.getLinkContents([gitScAddr]);
  return linkContents[0].data;
};

export const findComponentInstallationMethod = async (component: ScAddr) => {
  const installationTypes: { [key: string]: InstallMethodType } = {
    concept_reusable_dynamically_installed_component: InstallMethodType.DynamicallyInstalledComponent,
    concept_reusable_component_requiring_restart: InstallMethodType.ReusableComponent,
  };
  const installationTypesScAddr = new Map<string, ScAddr>();

  const typesPromises = Object.keys(installationTypes).map(async (type) => {
    const scAddr = await searchAddrById(type);
    if (scAddr) installationTypesScAddr.set(type, scAddr);
  });

  await Promise.all(typesPromises);

  for (const [installationType, addr] of installationTypesScAddr.entries()) {
    const template = new ScTemplate();
    const answerAlias = '_answer';
    template.triple(addr, ScType.EdgeAccessVarPosPerm, [component, answerAlias]);

    const result = await client.templateSearch(template);
    const resultScAddr = result.length ? result[0].get(answerAlias) : undefined;
    if (resultScAddr?.value === component.value) return installationTypes[installationType];;
  }

  return undefined;
};

export const findComponentSystemIdentifier = async (component: ScAddr) => {
  const template = new ScTemplate();
  const { nrelSystemIdentifier } = await scUtils.findKeynodes('nrel_system_identifier');
  const systemIdentifierAlias = '_systemIdentifier';
  template.tripleWithRelation(
    component,
    ScType.EdgeDCommonVar,
    [ScType.LinkVar, systemIdentifierAlias],
    ScType.EdgeAccessVarPosPerm,
    nrelSystemIdentifier,
  );
  const result = await client.templateSearch(template);
  const systemIdentifierScAddr = result.length ? result[0].get(systemIdentifierAlias) : undefined;
  if (!systemIdentifierScAddr) return undefined;
  const linkContents = await client.getLinkContents([systemIdentifierScAddr]);
  return linkContents[0].data;
};

export const findComponentAuthor = async (component: ScAddr) => {
  const template = new ScTemplate();
  const { nrelAuthors } = await scUtils.findKeynodes('nrel_authors');
  const authorAlias = '_author';
  template.tripleWithRelation(
    component,
    ScType.EdgeDCommonVar,
    [ScType.NodeVar, authorAlias],
    ScType.EdgeAccessVarPosPerm,
    nrelAuthors,
  );
  const result = await client.templateSearch(template);
  const authorScAddr = result.length ? result[0].get(authorAlias) : undefined;
  if (!authorScAddr) {
    return undefined;
  }
  const authors = await findAuthors(authorScAddr);
  return authors;
};

const findAuthors = async (authorsNode: ScAddr) => {
  const template = new ScTemplate();
  const authorAlias = '_author';
  template.triple(authorsNode, ScType.EdgeAccessVarPosPerm, [ScType.NodeVar, authorAlias]);
  const result = await client.templateSearch(template);
  const authors = await Promise.all(
    result.map(async (author) => await findComponentSystemIdentifier(author.get(authorAlias))),
  );
  return authors;
};

export const findComponentExplanation = async (component: ScAddr) => {
  const template = new ScTemplate();
  const { nrelExplanation } = await scUtils.findKeynodes('nrel_explanation');
  const explanationAlias = '_explanation';
  template.tripleWithRelation(
    component,
    ScType.EdgeDCommonVar,
    [ScType.LinkVar, explanationAlias],
    ScType.EdgeAccessVarPosPerm,
    nrelExplanation,
  );
  const result = await client.templateSearch(template);
  const explanationScAddr = result.length ? result[0].get(explanationAlias) : undefined;
  if (!explanationScAddr) return undefined;

  const linkContents = await client.getLinkContents([explanationScAddr]);
  return linkContents[0].data;
};

export const findComponentNote = async (component: ScAddr) => {
  const template = new ScTemplate();
  const { nrelNote } = await scUtils.findKeynodes('nrel_note');
  const noteAlias = '_note';
  template.tripleWithRelation(
    component,
    ScType.EdgeDCommonVar,
    [ScType.LinkVar, noteAlias],
    ScType.EdgeAccessVarPosPerm,
    nrelNote,
  );
  const result = await client.templateSearch(template);
  const noteScAddr = result.length ? result[0].get(noteAlias) : undefined;
  if (!noteScAddr) return undefined;

  const linkContents = await client.getLinkContents([noteScAddr]);
  return linkContents[0].data;
};

export const findComponentDeps = async (component: ScAddr) => {
  const template = new ScTemplate();
  const { nrelComponentDependencies } = await scUtils.findKeynodes('nrel_component_dependencies');
  const dependenciesAlias = '_dependencies';
  template.tripleWithRelation(
    component,
    ScType.EdgeDCommonVar,
    [ScType.NodeVar, dependenciesAlias],
    ScType.EdgeAccessVarPosPerm,
    nrelComponentDependencies,
  );
  const result = await client.templateSearch(template);
  if (!result.length) return new Map<ScAddr, string>();
  const deps = await findDeps(result[0].get(dependenciesAlias));
  return deps;
};

const findDeps = async (depsAddr: ScAddr) => {
  const template = new ScTemplate();
  const depAlias = '_dependency';
  template.triple(depsAddr, ScType.EdgeAccessVarPosPerm, [ScType.NodeVar, depAlias]);
  const result = await client.templateSearch(template);
  const depsMap = new Map<ScAddr, string>();
  await Promise.all(
    result.map(async (author): Promise<void> => {
      const depAddr = author.get(depAlias);
      const depSystemIdentifier = await findComponentSystemIdentifier(depAddr);
      depsMap.set(depAddr, depSystemIdentifier ? (depSystemIdentifier as string) : '...');
    }),
  );
  return depsMap;
};

export const findComponentType = async (component: ScAddr) => {
  const types = {
    concept_reusable_kb_component: CardComponentType.knowledgeBase,
    concept_reusable_ps_component: CardComponentType.problemSolver,
    concept_reusable_interface_component: CardComponentType.interface,
    concept_reusable_embedded_ostis_system: CardComponentType.subSystem,
  };
  const typesScAddr = new Map<ScAddr, CardComponentType>();
  await Promise.all(
    Object.entries(types).map(async ([type, componentType]) => {
      const scAddr = await searchAddrById(type);
      if (scAddr) typesScAddr.set(scAddr, componentType);
    }),
  );
  const componentTypes: CardComponentType[] = [];

  for (const [addr, componentType] of typesScAddr.entries()) {
    const template = new ScTemplate();
    template.triple(addr, ScType.EdgeAccessVarPosPerm, component);

    const result = await client.templateSearch(template);
    if (result.length) {
      componentTypes.push(componentType);
    }
  }

  return componentTypes[0];
};
