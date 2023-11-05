import { Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from '@components/Layout';
import { AskPage } from '@components/AskPage';
import { routes, DEFAULT_COMMAND_PATH } from '@constants';
import { Command } from '@pages/Command';
import { Main } from '@pages/Main';
import { Question } from '@pages/Question';

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
          <Route path={routes.ASK_AI_HOME} element={<AskPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
