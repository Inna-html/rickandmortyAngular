export interface IPaginatedData<Data> {
    info: {
        count: number;
        pages: number;
    },

    results: Data[];
}
