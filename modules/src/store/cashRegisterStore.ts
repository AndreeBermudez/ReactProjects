import { create } from "zustand";
import { api } from "../api/axiosConfig";
import { CashRegister, CloseCashRegister, CreateCashRegister } from "../interfaces/cashRegister";

interface CashRegisterStore {
    cashRegister: CashRegister | null;
    verify: boolean;
    cashOpened: (cashRegister: CreateCashRegister) => Promise<CashRegister | undefined>;
    cashClosed: (cashRegister: CloseCashRegister) => Promise<CashRegister | undefined>;
}

export const useCashRegisterStore = create<CashRegisterStore>((set)=>({
    cashRegister: null,
    verify: false,
    cashOpened:async (cashRegister: CreateCashRegister) => {
        try {
            const response = await api.post('/cash', cashRegister);
            const {data} = response.data;
            if(response.status === 200){
                set({cashRegister: data});
            }
            return data;
        } catch (error) {
            console.error(error);
        }
    },
    cashClosed: async (cashRegister: CloseCashRegister) => {
        try {
            const { id, monto_final} = cashRegister
            const response = await api.patch(`/cash/${id}`, monto_final);
            const {data} = response.data;
            if(response.status === 200){
                set({cashRegister: data});
            }
            return data;
        } catch (error) {
            console.error(error);
        }
    },
}))