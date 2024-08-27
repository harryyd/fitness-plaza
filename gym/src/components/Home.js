import React from 'react'
import HeroBanner from './HeroBanner' 
import Payment from './Payments/Payment'
import Cart from './Payments/Cart'
import PaymentSuccess from './Payments/PaymentSuccess'

// import Programpage from './admin/Programpage'
// import Checkwidth from './utility/Checkwidth'
// import Search from './Search'
// import Contact from './Contact'
// import SubLocation from './SubLocation'
// import ExerciseData from './ExerciseData'
// import Random from './utility/Random'
import Test from './Test'
// import Shop from './Shop/Shop.js' 
// import Modals from './utility/Modals'



const Home = () => {
  return (
    <div>
      
      {/* <Checkwidth /> */}
      <HeroBanner />
      <Cart />
      <Payment /> 
      <PaymentSuccess />
      {/* <Programpage /> */}
      {/* <Modals /> */}
      {/* <Shop /> */}
      <Test/> 
      {/* <Search /> */}
      {/* <Contact />
      <SubLocation /> */}
      {/* <Random /> */}
      {/* <ExerciseData /> */}
     
    </div>
  )
}

export default Home
