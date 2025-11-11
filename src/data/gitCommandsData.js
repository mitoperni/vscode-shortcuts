/**
 * Git Commands Data
 * 51 essential Git commands organized by category
 */

export const gitCommands = {
  basics: [
    { command: 'git init', desc: 'init' },
    { command: 'git clone <url>', desc: 'clone' },
    { command: 'git status', desc: 'status' },
    { command: 'git diff', desc: 'diff' },
    { command: 'git add <file>', desc: 'add' },
    { command: 'git add .', desc: 'addAll' },
    { command: 'git commit -m "message"', desc: 'commit' },
    { command: 'git log', desc: 'log' },
    { command: 'git log --oneline', desc: 'logOneline' }
  ],
  sync: [
    { command: 'git remote -v', desc: 'remote' },
    { command: 'git remote add origin <url>', desc: 'remoteAdd' },
    { command: 'git fetch origin', desc: 'fetch' },
    { command: 'git pull origin <branch>', desc: 'pull' },
    { command: 'git push origin <branch>', desc: 'push' },
    { command: 'git push -u origin main', desc: 'pushUpstream' },
    { command: 'git push --force', desc: 'pushForce' }
  ],
  branching: [
    { command: 'git branch', desc: 'branch' },
    { command: 'git branch -r', desc: 'branchRemote' },
    { command: 'git branch <name>', desc: 'branchCreate' },
    { command: 'git checkout <branch>', desc: 'checkout' },
    { command: 'git switch <branch>', desc: 'switch' },
    { command: 'git checkout -b <branch>', desc: 'checkoutCreate' },
    { command: 'git branch -m <newname>', desc: 'branchRename' },
    { command: 'git branch -d <branch>', desc: 'branchDelete' },
    { command: 'git push origin --delete <branch>', desc: 'branchDeleteRemote' }
  ],
  merge: [
    { command: 'git merge <branch>', desc: 'merge' },
    { command: 'git merge --abort', desc: 'mergeAbort' },
    { command: 'git branch --merged', desc: 'branchMerged' }
  ],
  stash: [
    { command: 'git stash', desc: 'stash' },
    { command: 'git stash save "message"', desc: 'stashSave' },
    { command: 'git stash list', desc: 'stashList' },
    { command: 'git stash apply', desc: 'stashApply' },
    { command: 'git stash pop', desc: 'stashPop' },
    { command: 'git stash drop stash@{0}', desc: 'stashDrop' },
    { command: 'git stash clear', desc: 'stashClear' }
  ],
  undo: [
    { command: 'git restore <file>', desc: 'restore' },
    { command: 'git restore --staged <file>', desc: 'restoreStaged' },
    { command: 'git reset --soft HEAD~1', desc: 'resetSoft' },
    { command: 'git reset --hard HEAD~1', desc: 'resetHard' },
    { command: 'git revert <commit>', desc: 'revert' },
    { command: 'git reset --hard <commit>', desc: 'resetToCommit' }
  ],
  advanced: [
    { command: 'git diff <branch1>..<branch2>', desc: 'diffBranches' },
    { command: 'git blame <file>', desc: 'blame' },
    { command: 'git clean -fd', desc: 'clean' },
    { command: 'git tag', desc: 'tag' },
    { command: 'git tag -a v1.0 -m "Version 1.0"', desc: 'tagCreate' },
    { command: 'git cherry-pick <commit>', desc: 'cherryPick' },
    { command: 'git rebase <branch>', desc: 'rebase' }
  ]
}

/**
 * Available categories for Git commands
 */
export const gitCategories = [
  'basics',
  'sync',
  'branching',
  'merge',
  'stash',
  'undo',
  'advanced'
]
