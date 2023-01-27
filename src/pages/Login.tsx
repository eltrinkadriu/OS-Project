import { useLoginFormik } from "@components/Login/useLoginFormik";
import { ErrorMessage } from "@components/shared/ErrorMessage";
import { Icon } from "@components/shared/Icon/Icon";
import { useAuthContext } from "@context/AuthContext/AuthContext";
import { toast } from "react-toastify";

export const Login = () => {
  const authCtx = useAuthContext();

  const formik = useLoginFormik({
    onSubmit(values, formikHelpers) {
      toast.success("You've been logged in!");
      authCtx.login();
    },
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <div className="flex flex-col items-center justify-center h-screen">
          <div className="border-80 border-green-300 rounded-full"></div>
          <h1 className="mt-6 mb-6 font-semibold">Welcome Eltrin!</h1>
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="pl-4 pr-6 pt-1 pb-1 text-sm rounded-lg text-end border border-black"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          {formik.errors.password && (
            <ErrorMessage message={formik.errors.password} />
          )}
          <button type="submit" className="flex flex-row mt-3">
            Unlock
            <Icon icon="arrow-right" className="ml-2 w-5" />
          </button>
        </div>
      </form>
    </>
  );
};
