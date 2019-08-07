import express from 'express';
import statCtrl from '../controllers/statCtr';

const router = express.Router(); 

router.route('/api/stat')
        .get(statCtrl.getStatData)
        .post(statCtrl.addStaticData) 

export default router        