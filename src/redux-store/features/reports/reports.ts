import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const initialState = {
    list: [] as any[],
    selectedList: [] as any[]
}

const reports = createSlice({
    name: 'reports',
    initialState,
    reducers: {
        setList: (state, action: PayloadAction<any[]>) => {
            state.list = action.payload
        },

        getList: (state, action: PayloadAction<string>) => {
            state.selectedList = state.list.filter((item) => item?.itemType === action.payload)
        },
        clearList: (state) => {
            state.list = []
            state.selectedList = []
        },
        changeReportStatus: (state, action: PayloadAction<any>) => {
            state.selectedList[action.payload.id].reportId.cashList = state.selectedList[
                action.payload.id
            ].reportId.cashList?.map((item: any) => ({
                ...item,
                status: action.payload.status
            }))
        },
        changeReportItemStatus: (state, action: PayloadAction<any>) => {
            if (state.selectedList[action.payload.id].itemType === 'Creditors') {
                state.selectedList[action.payload.id].reportId.creditorData[action.payload.index].status =
                    action.payload.status
            } else {
                state.selectedList[action.payload.id].reportId.billdata[action.payload.index].status =
                    action.payload.status
            }
        },
        editItem: (state, action: PayloadAction<any>) => {
            if (state.selectedList[action.payload.id].itemType === 'Creditors') {
                state.selectedList[action.payload.id].reportId.creditorData[action.payload.index] =
                    action.payload.values
            } else {
                state.selectedList[action.payload.id].reportId.billdata[action.payload.index] = action.payload.values
            }
        }
    }
})

export const { setList, getList, clearList, changeReportStatus, changeReportItemStatus, editItem } = reports.actions
export default reports.reducer
