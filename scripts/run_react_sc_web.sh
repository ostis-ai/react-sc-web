#!/usr/bin/env bash
set -eo pipefail

CURRENT_DIR=$(cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd)

if [ -z "${REACT_SC_WEB_PATH}" ];
then
  source "${CURRENT_DIR}/set_vars.sh"
fi

cd "${REACT_SC_WEB_PATH}"
npm start
