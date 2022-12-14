const express=require('express')
const router=express.Router();
const{register,login, followUser,logout, updatePassword, updateProfile, deleteMyProfile, myProfile, getUserProfile, getAllUsers}=require('../controllers/user')
const{isAuthenticated}=require('../middlewares/auth')
router.route("/register").post(register)
router.route("/follow/:id").get(isAuthenticated,followUser)
router.route('/logout').get(logout);


router.route('/update/password').put(isAuthenticated,updatePassword);
router.route('/update/profile').put(isAuthenticated,updateProfile);
router.route("/login").post(login)
router.route("/delete/me").delete(isAuthenticated,deleteMyProfile)
router.route('/me').get(isAuthenticated,myProfile)
// localhost:4000/api/v1/post/upoad

router.route("/user/:id").get(isAuthenticated,getUserProfile)
router.route('/users').get(isAuthenticated,getAllUsers)

module.exports=router;
