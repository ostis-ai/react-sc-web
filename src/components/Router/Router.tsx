import { Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from '@components/Layout';
import { routes, DEFAULT_COMMAND_PATH } from '@constants';
import { Command } from '@pages/Command';
import { Main } from '@pages/Main';
import { Question } from '@pages/Question';
import { Auth } from '@pages/Auth';
import { AuthLayout } from '@components/Layout/AuthLayout';
import { Library } from '@pages/Library'

export const Router = () => {
  return (
    <Suspense fallback={<>loading...</>}>
      <Routes>
          <Route
            path={routes.MAIN}
            element={
              <Layout>
                <Main />
              </Layout>
            }
          >
          <Route index element={<Navigate to={DEFAULT_COMMAND_PATH} replace />} />
          <Route path={routes.COMMAND} element={<Command />} />
          <Route path={routes.QUESTION} element={<Question />} />
          <Route path={routes.LIBRARY} element={<Library />} />
        </Route>
        <Route
          path={routes.AUTH}
          element={
            <AuthLayout>
              <Auth />
            </AuthLayout>
          }
        />
      </Routes>
    </Suspense>
  );
};
