import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const TOKEN = "6107311265:AAFyJ2lsPJzwvt47N8mxa914DCu1xmKScUQ";
const CHAT_ID = "-1001980978329";
export const RequestPost = createAsyncThunk("contact/post", async (body) => {
  const info = `Имя : ${body.name} %0AНомер телефона: ${body.number}`;
  await fetch(
    `https://api.telegram.org/bot${TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${info}&parse_mode=html`
  );
});
const RequestSlice = createSlice({
  name: "Request",
  initialState: {
    postRequest: {
      Error: false,
      Loading: false,
      Success: false,
    },
  },
  extraReducers: {
    [RequestPost.pending]: (state, action) => {
      state.postRequest.Loading = true;
    },
    [RequestPost.fulfilled]: (state, action) => {
      state.postRequest.Error = false;
      state.postRequest.Success = true;
      state.postRequest.Loading = false;
    },
    [RequestPost.rejected]: (state, action) => {
      state.postRequest.Error = true;
      state.postRequest.Success = false;
      state.postRequest.Loading = false;
    },
  },
});

export default RequestSlice.reducer;
