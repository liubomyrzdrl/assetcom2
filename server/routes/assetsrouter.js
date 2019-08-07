import express from 'express';
import assetCtrl from '../controllers/assetCtr';

const router = express.Router(); 

router.route('/api/assets')
  .get(assetCtrl.getAssData)
  .put(assetCtrl.updateAssData) 

 router.route('/api/assets/inincome')
     .put(assetCtrl.infIncome)

  router.route('/api/assets/payroll')
     .put(assetCtrl.payrollSalary)
 
 export default router 