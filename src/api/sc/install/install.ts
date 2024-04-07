import { searchAddrById } from '@api/sc/search/search';
import { ScAddr, ScConstruction, ScType } from 'ts-sc-client';
import { client } from '@api/sc';


export const initiateComponentInstallAgent = async (component: ScAddr) => {
    const construction = new ScConstruction();

    const questionNode = '_question_node';
    const componentsInstall = '_components_install_node'
    const componentsInstallEdge = '_components_install_edge'

    const actionComponentsSearch = await searchAddrById('action_components_install');
    const question = await searchAddrById('question');
    const questionInitiated = await searchAddrById('question_initiated');
    const rrel = await searchAddrById('rrel_1');

    if (!actionComponentsSearch || !question || !questionInitiated || !rrel) return;
  
    construction.createNode(ScType.NodeConst, questionNode);
    construction.createNode(ScType.NodeConst, componentsInstall);
    construction.createEdge(ScType.EdgeAccessConstPosPerm, question, questionNode);
    construction.createEdge(ScType.EdgeAccessConstPosPerm, actionComponentsSearch, questionNode);
    construction.createEdge(ScType.EdgeAccessConstPosPerm, questionInitiated, questionNode);
    construction.createEdge(ScType.EdgeAccessConstPosPerm, questionNode, componentsInstall, componentsInstallEdge);
    construction.createEdge(ScType.EdgeAccessConstPosPerm, rrel, componentsInstallEdge);
    construction.createEdge(ScType.EdgeAccessConstPosPerm, componentsInstall, component);

    const result = await client.createElements(construction);
    return result;
};