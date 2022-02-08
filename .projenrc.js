const { cdk8s, javascript } = require('projen');

const project = new cdk8s.ConstructLibraryCdk8s({
  name: '@wheatstalk/cdk8s-node-script',
  author: 'Josh Kellendonk',
  authorAddress: 'joshkellendonk@gmail.com',
  repositoryUrl: 'https://github.com/wheatstalk/cdk8s-node-script.git',
  description: 'CDK8s construct to run one-off scripts in your Kubernetes cluster',
  npmAccess: javascript.NpmAccess.PUBLIC,

  cdk8sVersion: '2.0.0',
  constructsVersion: '10.0.0',
  defaultReleaseBranch: 'main',

  autoApproveUpgrades: true,
  autoApproveOptions: {
    allowedUsernames: ['misterjoshua'],
  },
  depsUpgradeOptions: {
    ignoreProjen: false,
  },

  deps: [],

  bundledDeps: [
    'esbuild',
    'execa@^4',
    'fs-extra',
  ],

  devDeps: [
    '@types/fs-extra',
    '@wheatstalk/cdk8s-self-cleanup',
    'got',
  ],
});

project.addGitIgnore('/.idea');

project.upgradeWorkflow.postUpgradeTask.spawn(
  project.tasks.tryFind('integ:snapshot-all'),
);

project.synth();