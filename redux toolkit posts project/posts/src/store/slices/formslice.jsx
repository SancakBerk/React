import { createSlice, nanoid } from "@reduxjs/toolkit";

const formslice = createSlice({
  name: "formslice",
  initialState: {
    title: "",
    author: "",
    content: "",
    id: "",
    postsarray: [],
    AiFillLikenumber: 0,
    FcLikenumber: 0,
    AiFillDislikenumber: 0,
    FcDislikenumber: 0,
    FiCoffeenumber: 0,
  },
  reducers: {
    titleinputchange(state, action) {
      state.title = action.payload;
    },
    authorinputchange(state, action) {
      state.author = action.payload;
    },
    contentinputchange(state, action) {
      state.content = action.payload;
    },
    submit(state, action) {
      state.postsarray.push({
        title: state.title,
        author: state.author,
        content: state.content,
        id: nanoid(),
        AiFillLikenumber: 0,
        FcLikenumber: 0,
        AiFillDislikenumber: 0,
        FcDislikenumber: 0,
        FiCoffeenumber: 0,
      });
      state.title = "";
      state.author = "";
      state.content = "";
    },
    increaseAiFillLike(state, action) {
      state.postsarray.map((item)=>
      {
        console.log(item.AiFillLikenumber)
        if (item.id ===action.payload) {
          console.log(item.AiFillLikenumber)
          item.AiFillLikenumber += 1;
        }
      })
    },
    increaseFcLike(state, action) {
      
      state.postsarray.map((item)=>
      {
        if (item.id ===action.payload) {
          item.FcLikenumber += 1;
        }
      })
    },
    increaseAiFillDislike(state, action) {
      state.postsarray.map((item)=>
      {
        if (item.id ===action.payload) {
          item.AiFillDislikenumber += 1;
        }
      })
      
  
    },
    increaseFcDislike(state, action) {
      state.postsarray.map((item)=>
      {
        if (item.id ===action.payload) {
          item.FcDislikenumber += 1;
        }
      })
      
    },
    increaseFiCoffee(state, action) {
      state.postsarray.map((item)=>
      {
        if (item.id ===action.payload) {
          item.FiCoffeenumber += 1;
        }
      })
    },
  },
});

export const FormSlice = formslice.reducer;
export const {
  titleinputchange,
  authorinputchange,
  contentinputchange,
  submit,
  increaseAiFillLike,
  increaseFcLike,
  increaseAiFillDislike,
  increaseFcDislike,
  increaseFiCoffee,
} = formslice.actions;
