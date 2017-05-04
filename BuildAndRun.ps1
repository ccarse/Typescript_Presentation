$tsFile = $args[0]

tsc -t ES6 --strictNullChecks --noImplicitAny --outDir out ./$tsFile.ts
node "out/$tsFile.js" 