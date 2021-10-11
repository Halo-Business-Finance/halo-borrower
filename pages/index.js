import Head from 'next/head';
import styled from 'styled-components';
import Link from 'next/dist/client/link';

const Hero = styled.div`
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
`;

const Heading = styled.h1`
  color: #000;
  font-size: 10rem;
  font-weight: 900;
`;

export default function Home() {
  return (
    <>
      <Head>
        <title></title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Hero>
        {/* <form>
          <div className="form-row">
            <div className="form-group col">
              <label>Title</label>
              <select name="title" {...register('title')} className={`form-control ${errors.title ? 'is-invalid' : ''}`}>
                <option value=""></option>
                <option value="Mr">Mr</option>
                <option value="Mrs">Mrs</option>
                <option value="Miss">Miss</option>
                <option value="Ms">Ms</option>
              </select>
              <div className="invalid-feedback">{errors.title?.message}</div>
            </div>
            <div className="form-group col-5">
              <label>First Name</label>
              <input name="firstName" type="text" {...register('firstName')} className={`form-control ${errors.firstName ? 'is-invalid' : ''}`} />
              <div className="invalid-feedback">{errors.firstName?.message}</div>
            </div>
            <div className="form-group col-5">
              <label>Last Name</label>
              <input name="lastName" type="text" {...register('lastName')} className={`form-control ${errors.lastName ? 'is-invalid' : ''}`} />
              <div className="invalid-feedback">{errors.lastName?.message}</div>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-7">
              <label>Email</label>
              <input name="email" type="text" {...register('email')} className={`form-control ${errors.email ? 'is-invalid' : ''}`} />
              <div className="invalid-feedback">{errors.email?.message}</div>
            </div>
            <div className="form-group col">
              <label>Role</label>
              <select name="role" {...register('role')} className={`form-control ${errors.role ? 'is-invalid' : ''}`}>
                <option value=""></option>
                <option value="User">User</option>
                <option value="Admin">Admin</option>
              </select>
              <div className="invalid-feedback">{errors.role?.message}</div>
            </div>
          </div>
          {!isAddMode &&
            <div>
              <h3 className="pt-3">Change Password</h3>
              <p>Leave blank to keep the same password</p>
            </div>
          }
          <div className="form-row">
            <div className="form-group col">
              <label>
                Password
                {!isAddMode &&
                  (!showPassword
                    ? <span> - <a onClick={() => setShowPassword(!showPassword)} className="text-primary">Show</a></span>
                    : <em> - {user.password}</em>
                  )
                }
              </label>
              <input name="password" type="password" {...register('password')} className={`form-control ${errors.password ? 'is-invalid' : ''}`} />
              <div className="invalid-feedback">{errors.password?.message}</div>
            </div>
            <div className="form-group col">
              <label>Confirm Password</label>
              <input name="confirmPassword" type="password" {...register('confirmPassword')} className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''}`} />
              <div className="invalid-feedback">{errors.confirmPassword?.message}</div>
            </div>
          </div>
          <div className="form-group">
            <button type="submit" disabled={formState.isSubmitting} className="btn btn-primary mr-2">
              {formState.isSubmitting && <span className="spinner-border spinner-border-sm mr-1"></span>}
              Save
            </button>
            <button onClick={() => reset(formOptions.defaultValues)} type="button" disabled={formState.isSubmitting} className="btn btn-secondary">Reset</button>
            <Link href="/users" className="btn btn-link">Cancel</Link>
          </div>
        </form> */}
      </Hero>
    </>
  );
}