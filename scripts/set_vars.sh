#!/usr/bin/env bash
set -eo pipefail

ROOT_PATH=$(cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && cd .. && pwd)

export REACT_SC_WEB_PATH="${REACT_SC_WEB_PATH:-${ROOT_PATH}}"
