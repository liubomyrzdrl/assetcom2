import express from 'express';
import userCtrl from '../controllers/userCtr';

const router = express.Router(); 

router.route('/api/users')
        .get(userCtrl.getUsers)
        .post(userCtrl.createUser) 

  router.route('/api/users/:id')
        .get(userCtrl.getUserById)
        .put(userCtrl.updateUserByid)
        .delete(userCtrl.deleteUserByid)

 

  router.route('/api/users/asses/:id')
      .put(userCtrl.updateAssetUserByid)
       
  router.route('/api/infsalary')
      .put(userCtrl.infSalary)  

  router.route('/api/auth')
       .post(userCtrl.authAutent)
        
  export default router 