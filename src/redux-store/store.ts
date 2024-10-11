import { configureStore } from "@reduxjs/toolkit";
import atmListSlise from './features/atmList/atmList';
import userSlise from './features/user/user';
import reports from './features/reports/reports';
import newReport from "./features/notifications/newReport";
import customAlert from './features/custom-alert/customAlert';
import loading from './features/global/loading';

export const store = configureStore({
    reducer:{
        atmList: atmListSlise,
        user: userSlise,
        reports:reports,
        newReport:newReport,
        customAlert:customAlert,
        loading:loading
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;