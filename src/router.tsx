import { createBrowserRouter, Navigate } from 'react-router'
import { MobileFrame } from './layouts/MobileFrame'
import { ROUTES } from './routes'

// Each screen module exports `Component`, loaded on demand.
export const router = createBrowserRouter([
  {
    Component: MobileFrame,
    children: [
      { path: ROUTES.splash, lazy: () => import('./screens/Splash/SplashScreen') },
      { path: ROUTES.login, lazy: () => import('./screens/Login/LoginScreen') },
      { path: ROUTES.access, lazy: () => import('./screens/Access/AccessScreen') },
      { path: ROUTES.accessSuccess, lazy: () => import('./screens/AccessSuccess/AccessSuccessScreen') },
      { path: ROUTES.home, lazy: () => import('./screens/Home/HomeScreen') },
      { path: ROUTES.train, lazy: () => import('./screens/Train/TrainScreen') },
      { path: ROUTES.workoutStart, lazy: () => import('./screens/WorkoutStart/WorkoutStartScreen') },
      { path: ROUTES.workoutFinish, lazy: () => import('./screens/WorkoutFinish/WorkoutFinishScreen') },
      { path: ROUTES.activity, lazy: () => import('./screens/Activity/ActivityScreen') },
      { path: ROUTES.profile, lazy: () => import('./screens/Profile/ProfileScreen') },
      { path: ROUTES.membership, lazy: () => import('./screens/Membership/MembershipScreen') },
      { path: ROUTES.payments, lazy: () => import('./screens/Payments/PaymentsScreen') },
      { path: ROUTES.credential, lazy: () => import('./screens/Credential/CredentialScreen') },
      { path: '*', element: <Navigate to={ROUTES.splash} replace /> },
    ],
  },
])
