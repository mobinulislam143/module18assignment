const express = require('express');
const router = express.Router();

const WishListController = require('../controller/WishListController')
const ProductController = require('../controller/ProductController')
const CartListController = require('../controller/CartListController')
const UserController = require('../controller/UserController')
const AuthVerification = require('../middleware/AuthVerification')

//product
router.get('/ProductBrandList', ProductController.ProductBrandList)
router.get('/ProductCategoryList', ProductController.ProductCategoryList)
router.get('/ProductSliderList', ProductController.ProductSliderList)
router.get('/ProductListByBrand/:BrandID', ProductController.ProductListByBrand)
router.get('/ProductListByCategory/:CategoryID', ProductController.ProductListByCategory)
router.get('/ProductListByRemark/:Remark', ProductController.ProductListByRemark)
router.get('/ProductListBySmilier/:CategoryID', ProductController.ProductListBySmilier)
router.get('/ProductDetails/:ProductID', ProductController.ProductDetails)
router.get('/ProductListByKeyword/:Keyword', ProductController.ProductListByKeyword)
router.get('/ProductReviewList/:ProductID', ProductController.ProductReviewList)

//user manage
router.get('/userOtp/:email', UserController.UserOtp)
router.get('/VerifyLogin/:email/:otp', UserController.VerifyLogin)
router.get('/UserLogout',AuthVerification, UserController.UserLogout)
//profile create
router.post('/createProfile', AuthVerification, UserController.CreateProfile)
router.post('/UpdateProfile', AuthVerification, UserController.UpdateProfile)
router.get('/ReadProfile', AuthVerification, UserController.ReadProfile)

//wish list
router.post('/saveWishList', AuthVerification, WishListController.SaveWishList)
router.post('/RemoveWishList', AuthVerification, WishListController.RemoveWishList)
router.get('/WishList', AuthVerification, WishListController.WishList)

//cartList 
router.get('/CartList', AuthVerification, CartListController.CartList)
router.post('/SaveCartList', AuthVerification, CartListController.SaveCartList)
router.post("/RemoveCartList", AuthVerification, CartListController.RemoveCartList)




module.exports = router