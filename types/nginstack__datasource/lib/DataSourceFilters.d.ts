export = DataSourceFilters;
declare function DataSourceFilters(opt_dataSource?: DataSource, opt_filtersValues?: any[]): void;
declare class DataSourceFilters {
    constructor(opt_dataSource?: DataSource, opt_filtersValues?: any[]);
    private filtersArray_;
    private filtersHash_;
    private indexByName_;
    private newDynFilter_;
    private unshare_;
    length: number;
    importFields(
        classKey: number,
        prefix: string,
        opt_options?:
            | {
                includeFieldNames: string;
                excludeFieldNames: string;
                children: boolean;
                onlyVisible: boolean;
                onlyIncludedFieldNames: boolean;
                classDef: ModelDef;
            }
            | Record<any, any>,
    ): void;
    importVisibleFields(
        classKey: number,
        fieldNamesPrefix?: string,
        includeFieldNames?: string,
        excludeFieldNames?: string,
        classDef?: ModelDef,
        onlyIncludedFieldNames?: boolean,
    ): void;
    parseDynFilterExpr(filterName: string): any;
    filter(id: number | string, opt_type?: string, opt_classKey?: number): DataSourceFilter;
    private parseFiltersExpression_;
    getFilters(filtersSelection: string): DataSourceFilters;
    getIQueryFilters(filtersSelection: string, conditionalOperator: string, iquery?: IQuery): any[];
    getDerivedFiltersNames(filterName: string, selfDerived: boolean): any[];
    toString(): string;
    private add;
    hasFilter(name: string): boolean;
    map(
        fn: (arg0: DataSourceFilter, arg1: number, arg2: DataSourceFilter[]) => any,
        opt_scope?: any,
    ): any[];
}
declare namespace DataSourceFilters {
    export { DataSource, IQuery, ModelDef };
}
import DataSourceFilter = require("./DataSourceFilter.js");
type ModelDef = import("@nginstack/engine/lib/classdef/ModelDef");
type IQuery = import("@nginstack/iquery/lib/IQuery");
type DataSource = import("./DataSource");
