import axios from 'axios';

/**
 * Private API: State container. Uses directly by mutations.
 */
export const state = () => ({
  // https://help.github.com/en/github/creating-cloning-and-archiving-repositories/licensing-a-repository#searching-github-by-license-type
  githubPublicApiUrl: 'https://api.github.com/licenses',
  localApiUrl: 'https://daggerok.github.io/licenses/api',
  knownLicenses: [
    { 'afl-3.0': 'Academic Free License v3.0' },
    { 'apache-2.0': 'Apache license 2.0' },
    { 'artistic-2.0': 'Artistic license 2.0' },
    { 'bsl-1.0': 'Boost Software License 1.0' },
    { 'bsd-2-clause': 'BSD 2-clause "Simplified" license' },
    { 'bsd-3-clause': 'BSD 3-clause "New" or "Revised" license' },
    { 'bsd-3-clause-clear': 'BSD 3-clause Clear license' },
    // { 'cc': 'Creative Commons license family' }, // not available
    { 'cc0-1.0': 'Creative Commons Zero v1.0 Universal' },
    { 'cc-by-4.0': 'Creative Commons Attribution 4.0' },
    { 'cc-by-sa-4.0': 'Creative Commons Attribution Share Alike 4.0' },
    { 'wtfpl': 'Do What The F*ck You Want To Public License' },
    { 'ecl-2.0': 'Educational Community License v2.0' },
    { 'epl-1.0': 'Eclipse Public License 1.0' },
    { 'eupl-1.1': 'European Union Public License 1.1' },
    { 'agpl-3.0': 'GNU Affero General Public License v3.0' },
    // { 'gpl': 'GNU General Public License family' }, // not available
    { 'gpl-2.0': 'GNU General Public License v2.0' },
    { 'gpl-3.0': 'GNU General Public License v3.0' },
    // { 'lgpl': 'GNU Lesser General Public License family' }, // not available
    { 'lgpl-2.1': 'GNU Lesser General Public License v2.1' },
    { 'lgpl-3.0': 'GNU Lesser General Public License v3.0' },
    { 'isc': 'ISC' },
    { 'lppl-1.3c': 'LaTeX Project Public License v1.3c' },
    { 'ms-pl': 'Microsoft Public License' },
    { 'mit': 'MIT' },
    { 'mpl-2.0': 'Mozilla Public License 2.0' },
    { 'osl-3.0': 'Open Software License 3.0' },
    { 'postgresql': 'PostgreSQL License' },
    { 'ofl-1.1': 'SIL Open Font License 1.1' },
    { 'ncsa': 'University of Illinois/NCSA Open Source License' },
    { 'unlicense': 'The Unlicense' },
    { 'zlib': 'zLib License' },
  ],
  isLocal: true,
  license: null,
  currentKey: null,
});

/**
 * Private API: State mutations. Uses directly only by actions.
 */
export const mutations = {
  setLicense: (state, value) => state.license = value,
  setCurrentKey: (state, value) => state.currentKey = value,
};

/**
 * Public API: Can be directly used in App and in Actions.
 */
export const getters = {
  getGithubPublicApiUrl: state => state.githubPublicApiUrl,
  getLocalApiUrl: state => state.localApiUrl,
  getKnownLicenses: state => state.knownLicenses,
  getKnownLicenseKeys: (state, getters) => getters
    .getKnownLicenses.map(l => Object.keys(l)),
  getLicense: state => state.license,
  getCurrentKey: state => state.currentKey,
};

/**
 * Public API: Can be directly used in App.
 */
export const actions = {
  fetchLicenseByKey: ({state, getters, commit, dispatch}, key) =>
    axios
      .get(!state.isLocal
        ? `${getters.getGithubPublicApiUrl}/${key}`
        : `${getters.getLocalApiUrl}/${key}.json`, {
        cors: true,
        headers: {
          'Accept': 'application/json',
        },
      })
      .then(value => value.data)
      .then(license => {
        commit('setLicense', license);
        console.log('received license:', license);
      }),
  setCurrentKey: ({ commit }, currentKey) =>
    commit('setCurrentKey', currentKey),
};
