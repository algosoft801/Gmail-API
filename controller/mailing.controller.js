import express from 'express';
import Mailing from '../gmail api/Mailing';
const mailingController = express.Router();
/**
 * POST/ User subscribe to App
 */
mailingController.post('/', (req, res) => {
  try {
    Mailing.sendEmail(req.query);
    res.status(200).json({ message: 'email sent successfully' });
  } catch (e) {
    console.log(e);
  }
});
export default mailingController;