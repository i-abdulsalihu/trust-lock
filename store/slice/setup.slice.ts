import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialSetupStateProps {
  currentStep: number;
}

const initialSetupState: InitialSetupStateProps = {
  currentStep: 1,
};

const setupSlice = createSlice({
  name: "setup",
  initialState: initialSetupState,
  reducers: {
    nextStep: (state) => {
      state.currentStep += 1;
    },
    prevStep: (state) => {
      state.currentStep -= 1;
    },
    goToStep: (state, action: PayloadAction<number>) => {
      state.currentStep = action.payload;
    },
    resetForm: () => initialSetupState,
  },
});

export const { nextStep, prevStep, goToStep, resetForm } = setupSlice.actions;
export default setupSlice.reducer;
