import '@adonisjs/core/types/http'

type ParamValue = string | number | bigint | boolean

export type ScannedRoutes = {
  ALL: {
    'home': { paramsTuple?: []; params?: {} }
    'get_personajes.index': { paramsTuple?: []; params?: {} }
    'personajes.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'transformaciones.transformations': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'get_planetas.index': { paramsTuple?: []; params?: {} }
    'get_planetas.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'planetasPersonajes': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'new_account.create': { paramsTuple?: []; params?: {} }
    'new_account.store': { paramsTuple?: []; params?: {} }
    'session.create': { paramsTuple?: []; params?: {} }
    'session.store': { paramsTuple?: []; params?: {} }
    'session.destroy': { paramsTuple?: []; params?: {} }
  }
  GET: {
    'home': { paramsTuple?: []; params?: {} }
    'get_personajes.index': { paramsTuple?: []; params?: {} }
    'personajes.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'transformaciones.transformations': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'get_planetas.index': { paramsTuple?: []; params?: {} }
    'get_planetas.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'planetasPersonajes': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'new_account.create': { paramsTuple?: []; params?: {} }
    'session.create': { paramsTuple?: []; params?: {} }
  }
  HEAD: {
    'home': { paramsTuple?: []; params?: {} }
    'get_personajes.index': { paramsTuple?: []; params?: {} }
    'personajes.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'transformaciones.transformations': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'get_planetas.index': { paramsTuple?: []; params?: {} }
    'get_planetas.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'planetasPersonajes': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'new_account.create': { paramsTuple?: []; params?: {} }
    'session.create': { paramsTuple?: []; params?: {} }
  }
  POST: {
    'new_account.store': { paramsTuple?: []; params?: {} }
    'session.store': { paramsTuple?: []; params?: {} }
    'session.destroy': { paramsTuple?: []; params?: {} }
  }
}
declare module '@adonisjs/core/types/http' {
  export interface RoutesList extends ScannedRoutes {}
}