import '@adonisjs/core/types/http'

type ParamValue = string | number | bigint | boolean

export type ScannedRoutes = {
  ALL: {
    'home': { paramsTuple?: []; params?: {} }
    'get_personajes.index': { paramsTuple?: []; params?: {} }
    'get_personaje.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'plantas': { paramsTuple?: []; params?: {} }
    'personajesDetalle': { paramsTuple?: []; params?: {} }
    'planetaDetalle': { paramsTuple?: []; params?: {} }
    'new_account.create': { paramsTuple?: []; params?: {} }
    'new_account.store': { paramsTuple?: []; params?: {} }
    'session.create': { paramsTuple?: []; params?: {} }
    'session.store': { paramsTuple?: []; params?: {} }
    'session.destroy': { paramsTuple?: []; params?: {} }
  }
  GET: {
    'home': { paramsTuple?: []; params?: {} }
    'get_personajes.index': { paramsTuple?: []; params?: {} }
    'get_personaje.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'plantas': { paramsTuple?: []; params?: {} }
    'personajesDetalle': { paramsTuple?: []; params?: {} }
    'planetaDetalle': { paramsTuple?: []; params?: {} }
    'new_account.create': { paramsTuple?: []; params?: {} }
    'session.create': { paramsTuple?: []; params?: {} }
  }
  HEAD: {
    'home': { paramsTuple?: []; params?: {} }
    'get_personajes.index': { paramsTuple?: []; params?: {} }
    'get_personaje.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'plantas': { paramsTuple?: []; params?: {} }
    'personajesDetalle': { paramsTuple?: []; params?: {} }
    'planetaDetalle': { paramsTuple?: []; params?: {} }
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