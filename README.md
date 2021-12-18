# space-finder-backend

npm init -y
add .gitignore
npm install --save-dev aws-cdk aws-cdk-lib constructs ts-node typescript
edit cdk.json

```
{
    "app": "npx infrastructure/Launcher.ts"
}
```

tsc --init
make tsconfig.json same as the one cdk init created
cdk synth
