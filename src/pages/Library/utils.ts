import { searchAddrById } from '@api/sc/search/search';
import {
  ScAddr,
  ScConstruction,
  ScTemplate,
  ScType,
} from 'ts-sc-client';
import { client, scUtils } from '@api/sc';


const findComponentGit = async (componentAddr: ScAddr): Promise<string | number | undefined> => {
    const template = new ScTemplate();
    const { nrelComponentAddress } = await scUtils.findKeynodes('nrel_component_address');
    const gitAlias = '_git';
    template.tripleWithRelation(
        componentAddr,
        ScType.EdgeDCommonVar,
        [ScType.LinkVar, gitAlias],
        ScType.EdgeAccessVarPosPerm,
        nrelComponentAddress,
    );
    const result = await client.templateSearch(template);
    const gitScAddr = result.length ? result[0].get(gitAlias) : undefined;

    if (!gitScAddr)
        return undefined;

    const linkContents = await client.getLinkContents([gitScAddr]);
    return linkContents[0].data;
};


const findComponentInstallationMethod = async (componentAddr: ScAddr) => {
    const template = new ScTemplate();
    const { nrelInstallationMethod } = await scUtils.findKeynodes('nrel_installation_method');
    const methodAlias = '_method';
    template.tripleWithRelation(
        componentAddr,
        ScType.EdgeDCommonVar,
        [ScType.NodeVar, methodAlias],
        ScType.EdgeAccessVarPosPerm,
        nrelInstallationMethod,
    );
    const result = await client.templateSearch(template);
    const methodScAddr = result.length ? result[0].get(methodAlias) : undefined;
    return methodScAddr;
};

const findComponentSystemIdentifier = async (componentAddr: ScAddr) => {
    const template = new ScTemplate();
    const { nrelSystemIdentifier } = await scUtils.findKeynodes('nrel_system_identifier');
    const systemIdentifierAlias = '_systemIdentifier';
    template.tripleWithRelation(
        componentAddr,
        ScType.EdgeDCommonVar,
        [ScType.LinkVar, systemIdentifierAlias],
        ScType.EdgeAccessVarPosPerm,
        nrelSystemIdentifier,
    );
    const result = await client.templateSearch(template);
    const systemIdentifierScAddr = result.length ? result[0].get(systemIdentifierAlias) : undefined;
    if (!systemIdentifierScAddr)
        return undefined;
    const linkContents = await client.getLinkContents([systemIdentifierScAddr]);
    return linkContents[0].data;
};


const findComponentExplanation = async (componentAddr: ScAddr) => {
    const template = new ScTemplate();
    const { nrelExplanation } = await scUtils.findKeynodes('nrel_explanation');
    const explanationAlias = '_explanation';
    template.tripleWithRelation(
        componentAddr,
        ScType.EdgeDCommonVar,
        [ScType.LinkVar, explanationAlias],
        ScType.EdgeAccessVarPosPerm,
        nrelExplanation,
    );
    const result = await client.templateSearch(template);
    const explanationScAddr = result.length ? result[0].get(explanationAlias) : undefined;
    if (!explanationScAddr)
        return undefined;

    const linkContents = await client.getLinkContents([explanationScAddr]);
    return linkContents[0].data;
};

const findComponentNote = async (componentAddr: ScAddr) => {
    const template = new ScTemplate();
    const { nrelNote } = await scUtils.findKeynodes('nrel_note');
    const noteAlias = '_note';
    template.tripleWithRelation(
        componentAddr,
        ScType.EdgeDCommonVar,
        [ScType.LinkVar, noteAlias],
        ScType.EdgeAccessVarPosPerm,
        nrelNote,
    );
    const result = await client.templateSearch(template);
    const noteScAddr = result.length ? result[0].get(noteAlias) : undefined;
    if (!noteScAddr)
        return undefined;

    const linkContents = await client.getLinkContents([noteScAddr]);
    return linkContents[0].data;
};

const findComponentDeps = async (componentAddr: ScAddr) => {
    const template = new ScTemplate();
    const { nrelComponentDependencies } = await scUtils.findKeynodes('nrel_component_dependencies');
    const dependenciesAlias = '_dependencies';
    template.tripleWithRelation(
        componentAddr,
        ScType.EdgeDCommonVar,
        [ScType.NodeVar, dependenciesAlias],
        ScType.EdgeAccessVarPosPerm,
        nrelComponentDependencies,
    );
    const result = await client.templateSearch(template);
    const ScAddr = result.length ? result[0].get(dependenciesAlias) : undefined;
    return ScAddr;
};

const findComponentType = async (componentAddr: ScAddr) => {
    const types = ["concept_reusable_kb_component", "concept_reusable_ps_component", "concept_reusable_interface_component", "concept_reusable_embedded_ostis_system"];
    const typesScAddr = await Promise.all(types.map(async (type) => await searchAddrById(type)));
    const componentTypes: ScAddr[] = [];

    await Promise.all(typesScAddr.map(async (type) => {
        if (!type)
            return

        const template = new ScTemplate();
        template.triple(
            type,
            ScType.EdgeAccessVarPosPerm,
            componentAddr
        );

        const result = await client.templateSearch(template);
        if (result.length) {
            componentTypes.push(type);
        }
    }));
    return componentTypes;
};

const initiateComponentSearchAgent = async () => {
    const construction = new ScConstruction();
    const questionNode = "_question_node";
    const actionComponentsSearch = await searchAddrById("action_components_search");
    const question = await searchAddrById("question");
    const questionInitiated = await searchAddrById("question_initiated");
    if (!question || !actionComponentsSearch || !questionInitiated)
        return;

    construction.createNode(ScType.NodeConst, questionNode);
    construction.createEdge(
        ScType.EdgeAccessConstPosPerm,
        question,
        questionNode,
    );
    construction.createEdge(
        ScType.EdgeAccessConstPosPerm,
        actionComponentsSearch,
        questionNode,
    );
    construction.createEdge(
        ScType.EdgeAccessConstPosPerm,
        questionInitiated,
        questionNode,
    );
    const result = await client.createElements(construction);
    return result;
}

const getAgentResult = async (answerNode: ScAddr) => {
    const { nrelAnswer } = await scUtils.findKeynodes('nrel_answer');
    if (!nrelAnswer)
        return;
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
}


const getComponents = async (agentResult: ScAddr) => {
    const template = new ScTemplate();
    const answerAlias = '_answer';
    template.triple(
        agentResult,
        ScType.EdgeAccessVarPosPerm,
        [ScType.NodeVarStruct, answerAlias],
    );
    const result = await client.templateSearch(template);
    const components = result.map((tuple) => tuple.get(answerAlias));
    return components;
}

const getSpecification = async (component: ScAddr) => {
    const template = new ScTemplate();
    const specificationAlias = '_specification';
    const { conceptReusableComponent } = await scUtils.findKeynodes('concept_reusable_component');
    template.triple(
        component,
        ScType.EdgeAccessVarPosPerm,
        [ScType.NodeVar, specificationAlias],
    );
    template.triple(
        conceptReusableComponent,
        ScType.EdgeAccessVarPosPerm,
        [ScType.NodeVar, specificationAlias],
    );

    const result = await client.templateSearch(template);
    return result.length ? result[0].get(specificationAlias) : undefined
}


export const findComponentsSpecifications = async () => {
    const initiatidAgentStuct = await initiateComponentSearchAgent();
    if (!initiatidAgentStuct)
        return;

    // TODO: get by index (return underfied if get by index now)
    let agentResult: ScAddr | undefined = undefined;
    await Promise.all(initiatidAgentStuct.map(async (answerNode) => {
        const currentAgentResult = await getAgentResult(answerNode);
        if (currentAgentResult) {
            agentResult = currentAgentResult;
        }
    }));
    if (!agentResult)
        return;

    const components = await getComponents(agentResult);
    return components;
}