import { createSimpleRestDataProvider } from "@refinedev/rest/simple-rest";
import { API_URL } from "./constants";
import {BaseRecord, DataProvider, GetListParams, GetListResponse} from "@refinedev/core";
import { MOCK_SUBJECTS } from "../constants";

export const dataProvider : DataProvider = {
  getList: async <TData extends BaseRecord = BaseRecord>({resource, filters}: GetListParams): Promise<GetListResponse<TData>> => {
    if(resource !== 'subjects') return { data: [] as TData[], total: 0}

    let data = [...MOCK_SUBJECTS];

    if (filters) {
      filters.forEach((filter) => {
        if ("field" in filter && filter.operator === "eq" && filter.field === "department" && filter.value && filter.value !== "all") {
          data = data.filter((item) => item.department === filter.value);
        }
        if ("field" in filter && filter.operator === "contains" && filter.field === "name" && filter.value) {
          data = data.filter((item) => item.name.toLowerCase().includes(String(filter.value).toLowerCase()));
        }
      });
    }

    return {
      data: data as unknown as TData[],
      total: data.length,
    }
  },

  getOne: async () => {throw new Error("This function is not present in mock")},
  create: async () => {throw new Error("This function is not present in mock")},
  update: async () => {throw new Error("This function is not present in mock")},
  deleteOne: async () => {throw new Error("This function is not present in mock")},

  getApiUrl: () => API_URL,
}
