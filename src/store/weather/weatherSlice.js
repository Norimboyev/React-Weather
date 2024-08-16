import {
  createAsyncThunk,
  createSlice
} from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  key: "6af5c4a2f6358d126f6218ce83ec3fd9",
  data: null,
  city: null,
  // daily: null,
};

const {
  key
} = initialState;

// https://api.openweathermap.org/data/2.5/weather?q=${city name}&appid=${API key}
export const getLatLon = createAsyncThunk(
  "weatherSlice/getLatLon",
  async (city, {
    dispatch
  }) => {
    const {
      data
    } = await axios.get(
      `https://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${key}`
    );
    dispatch(getWeather(data[0]));
  }
);

export const getWeather = createAsyncThunk(
  "weatherSlice/getWeather",
  async (param) => {
    const {
      lat,
      lon,
      local_names
    } = param;
    const {
      data
    } = await axios.get(
      `https://api.openweathermap.org/data/2.8/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&appid=${key}&units=metric&lang=ru`
    );
    data.city = local_names.ru || local_names.en
    return data;
  }
);

const weatherSlice = createSlice({
  name: "weatherSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getWeather.fulfilled, (state, action) => {
      state.data = action.payload;
      // state.daily = [...action.payload.daily]
    });
  },
});

export default weatherSlice.reducer;