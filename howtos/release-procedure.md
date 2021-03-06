# Release Procedure

## General

The complete documentation is fully versioned. This means that there will be no static content that is the same across all versions. The documentation contains a drop down menu to set the version. The default is the latest version.

## Roles

- PM = Product Manager
- DEVEX = Developer Experience
- PT = Product Team (Zeebe/Operate/Tasklist/Cloud Console/..)
- RM = Release Manager
- AUTO = Automated task

## Perform a Minor Release (MR)

Here the phases for a new minor release are described (referring to the documentation).

### MR Phase 1: Preparation

- RM: Convert Draft PR into PR
- PM and DEVEX: Final review of the release branch (including release notes).
- PM and DEVEX: Approve Release Branch.
- AUTO: Merge Release Branch into Master.

### MR Phase 2: Publish Release

- RM: Create new GIT release (with the same version number of the release branch). Use release notes from `RELEASE.md`.
- AUTO: Build master and put it live

### MR Phase 3: After the release

- RM: Create new Release Branch. Naming Pattern: `release_${major-version}_${minor-version}`, example: `release_0_26`.
- RM: Create a new version in the documentation: `npm run docusaurus docs:version ${major-version}.${minor-version}`. This freezes the current state of the documentation. New content is added to the newly created version.
- RM: Open Draft PR with the name `Release ${major-version}.${minor-version}`.
- RM: Communicate new Release Branch via Slack.

## Make changes to old versions (C)

### C Phase 1: Preparation

- PT: Create Github Issue with a short description of the changes.
- PT: Create a new branch. Naming Pattern: `${product}_${issue-number}`
- PT: Create Draft-PR (name: `${product} / #${issue-number} / ${title}`), link issue and make changes.
- PT: Once the draft PR is ready for review, convert it to PR.
- PT and DEVEX: Review and approve.
- AUTO: Merge Branch to Master.

### C Phase 2: Publish Release

- RM: Create new GIT release.
- AUTO: Build master and put it live.

### C Phase 3: After the release

- PT: Merge changes to the current release branch.

## Changes to the current Release Branch (RB)

- PT: Create Github Issue with a short description of the changes.
- PT: New branch from the Release Branch. Naming: `release_${major-version}_${minor-version}_${product}_${issue-number}`
- PT: Create Draft-PR (name: `Release ${major-version}.${minor-version} / ${product} / #${issue-number} / ${title}`), link issue and make changes
- PT: Once the draft PR is ready for review, convert to PR.
- PT and DEVEX: Review and approve.
- AUTO: Merge Branch to Release Branch.
