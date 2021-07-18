import {firebase_app} from "../ultils/config/FirebaseConfig";

export const signInWithPhone = (phone: string, captcha: any) => firebase_app.auth().signInWithPhoneNumber(phone, captcha)
