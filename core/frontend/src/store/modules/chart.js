const getDefaultState = () => {
  return {
    sceneData: {},
    table: {},
    sceneId: {},
    viewId: null,
    tableId: {},
    chartSceneData: {},
    tableInstance: {}
  }
}

const state = getDefaultState()

const mutations = {
  setSceneData: (state, sceneData) => {
    state.sceneData = sceneData
  },
  setTable: (state, table) => {
    state.table = table
  },
  setSceneId: (state, sceneId) => {
    state.sceneId = sceneId
  },
  setViewId: (state, viewId) => {
    state.viewId = viewId
  },
  setTableId: (state, tableId) => {
    state.tableId = tableId
  },
  setChartSceneData: (state, chartSceneData) => {
    state.chartSceneData = chartSceneData
  },
  setTableInstance: (state, { viewId, tableInstance }) => {
    state.tableInstance[viewId] = tableInstance
  }
}

const actions = {
  setSceneData({ commit }, sceneData) {
    commit('setSceneData', sceneData)
  },
  setTable({ commit }, table) {
    commit('setTable', table)
  },
  setSceneId: ({ commit }, sceneId) => {
    commit('setSceneId', sceneId)
  },
  setViewId: ({ commit }, viewId) => {
    commit('setViewId', viewId)
  },
  setTableId: ({ commit }, tableId) => {
    commit('setTableId', tableId)
  },
  setChartSceneData: ({ commit }, chartSceneData) => {
    commit('setChartSceneData', chartSceneData)
  },
  setTableInstance: ({ commit }, { viewId, tableInstance }) => {
    commit('setTableInstance', { viewId, tableInstance })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

