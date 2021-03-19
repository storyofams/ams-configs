<p align="center">
  <a aria-label="Story of AMS logo" href="https://storyofams.com/" target="_blank" align="center">
    <img src="https://storyofams.com/public/story-of-ams-logo-small@3x.png" alt="Story of AMS" width="120">
  </a>
  <h1 align="center">ams-configs</h1>
</p>

<p align="center">
  <a aria-label="Releases" href="https://GitHub.com/storyofams/ams-configs/releases/">
    <img src="https://img.shields.io/github/release/storyofams/ams-configs.svg" />
  </a>
</p>

A repo containing our ever growing and ever evolving config files shareable between projects.

# Getting started
Finally a way to manage dot-/config-files and keep them updated fromm a single repo.

## Installation

Add mrm and the preset to your project:
```
npm i --save-dev mrm @storyofams/mrm-preset
```

Add script the following script to your package.json:
```
"mrm": "mrm --preset=@storyofams/mrm-preset"
```

## Add or update files
`yarn mrm frontend|backend|library`
