import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    item: [
        {   
            id :1 ,
            name : "first" , 
            amount : 3000,
            bannerImage : "https://i0.wp.com/goldsgym.in/wp-content/uploads/2023/10/compress-g2.jpg?w=408&ssl=1"  , 
            quantity : 5,
            description : "blah blah"
        }, 
        {
            id :2 ,
            name : "second" , 
            amount : 9000,
            bannerImage : "https://i0.wp.com/goldsgym.in/wp-content/uploads/2023/12/Golds_Day_1_Funct-01883_final.jpg?fit=1125%2C750&ssl=1"  , 
            quantity : 2 ,
            description : "blah blah"
        },
        {   
            id :3 ,
            name : "third" , 
            amount : 8000,
            bannerImage : "https://i0.wp.com/goldsgym.in/wp-content/uploads/2023/12/Workout-Moments-Team-Training.jpg?fit=1125%2C750&ssl=1"  , 
            quantity : 1 ,
            description : "blah blah"
        }
    ] ,
    TotalAmount : 0
}

const cartSlice = createSlice({
    name : "cart" , 
    initialState ,
    another :{},
    reducers : {
        addToCart : (state , action) =>{ 
            console.log("action " , action.payload)
            const temp = state.item.find(single => single.name === action.payload.name)
            if(temp)
            {
                temp.quantity += 1 ;    
            }
            else{
                const obj =  { 
                    name : action.payload.name, 
                    amount  : action.payload.amount,
                    bannerImage : action.payload.bannerImage, 
                    description :action.payload.description,
                    quantity : action.payload.quantity ,
                    id : action.payload.id  
                }
                state.item.push(obj) ;
            }   
            //cheeck if the product already exist in cart 
        

        } , 

        removeFromCart: (state, action) => {
            state.item = state.item.filter(single => single.name !== action.payload);
        },

        clearCart: (state) => {
            state.item = [];
          },
        calculateTotalAmount : (state,action) =>{
            state.TotalAmount= state.item.reduce((total,item)=>{
                return total + item.amount * item.quantity ; 
            } , 0)
        },
        updateCartQuantity : (state , action) =>{
            const item= state.item.find(it => it.id === action.payload.id)
            if(item) {
                item.quantity = action.payload.quantity
            } 
        } ,
        calculateDiscountedAmount : (state ,action ) =>{
            state.TotalAmount = action.payload.totalamount
        }
    }
})
export const { addToCart, removeFromCart, clearCart , calculateTotalAmount ,updateCartQuantity,calculateDiscountedAmount } = cartSlice.actions;
export default cartSlice.reducer;