import express from 'express';
import response from '../services/response';
import validateUserPost from '../config/db/models';
const router = express.Router();

// Create a new user
router.post('/', async (req, res) => {
  const { error } = validateUserPost(req.body);
  if (error) return response.validationErrors(res, error.details[0].message);

  return response.error(res);
});

export default router;
// Create a new User
// router.post('/', async (req, res) => {
//   const { error } = validateUserPost(req.body);
//   if (error) return response.validationErrors(res, error.details[0].message);

//   db.User.findAll({
//     include: {
//       model: db.Project
//     }
//   })
//     .then((result: object) => res.json(result))
//     .catch((err: object) => console.error(err));

//   let user = await User.findOne({ email: req.body.email.toLowerCase() });
//   if (user)
//     return response.error(res, USER_CONSTANTS.EMAIL_ALREADY_EXISTS, 400);

//   const email = req.body.email.toLowerCase();
//   const {
//     password,
//     firstName,
//     lastName,
//     phone,
//     gender,
//     interestedInGender,
//     interestedFromAge,
//     interestedToAge
//   } = req.body;

//   const profilePic = `${config.get('app_domain')}/profile-pic/default.jpeg`;

//   try {
//     // fetch role
//     role = await Role.findOne({ role: 'user' });

//     if (!role && role.status !== 'active') return response.error(res);

//     //instantiate User model
//     const user = new User({
//       email,
//       password,
//       roles: role._id,
//       status: 'inactive',
//       firstName,
//       lastName,
//       phone,
//       gender,
//       interestedInGender,
//       interestedFromAge,
//       interestedToAge,
//       profilePic
//     });

//     //create salt for user password hash
//     const salt = await bcrypt.genSalt(10);

//     //hash password and replace user password with the hashed password
//     user.password = await bcrypt.hash(password, salt);

//     // // create user profile
//     // const profile = await Profile.create({
//     //   firstName, lastName, phone, gender,
//     //   interestedInGender, interestedFromAge, interestedToAge,
//     //   dob, city, state, country, profilePic
//     // });
//     // console.log(profile + "profile created...")

//     // // add user id to profile
//     // profile.user = user._id;
//     // await profile.save();
//     // console.log(profile + " profile updated...")

//     // add profile id to user
//     // user.profile = profile._id;

//     // save user to db
//     await user.save();

//     // ProfileImage

//     // Create a verification token for this user
//     var token = new Token({
//       _userId: user._id,
//       token: crypto.randomBytes(16).toString('hex')
//     });

//     // Save the verification token
//     token.save(function (err) {
//       if (err) return response.error(res, err.message, 500);
//     });

//     // let baseurl = config.get("app_domain");
//     let frontendRedirectURL = config.get('front_verify_email');
//     console.log(`host url is: ${frontendRedirectURL}`);
//     callback_url = `${frontendRedirectURL}${token.token}`;
//     // callback_url = `${baseurl}/api/user/verify/${token.token}`;

//     // send user verification email
//     console.log('firstname is: ', user.firstName);
//     const payload = {
//       email: user.email,
//       firstName: user.firstName,
//       mailOptions: { mailType: 'sendUserVerificationMail', callback_url }
//     };

//     console.log('payload is: ', payload);

//     await publishToQueue(payload);

//     return response.success(res, USER_CONSTANTS.VERIFICATION_EMAIL_SENT);
//   } catch (err) {
//     console.error(err.message);
//     return response.error(res, err.message, 500);
//   }
// });
