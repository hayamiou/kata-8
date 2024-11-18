import { strict as assert } from 'assert'; // Utilisation d'assert en mode strict
import { testAcronym } from './acronyms'; // Importer la fonction TypeScript

try {
    assert.strictEqual(testAcronym('Wild Code School'), 'W.C.S.');
    assert.strictEqual(testAcronym('Electricite de France'), 'E.D.F.');
    assert.strictEqual(
        testAcronym('Société Nationale du Chemin de Fer Français'),
        'S.N.C.F.'
    );
    assert.strictEqual(testAcronym('World Wide Web Consortium'), 'W.3.C.');
    console.log('✅ Tous les tests passent !');
} catch (error) {
    console.error('❌ Un test a échoué :', (error as Error).message);
}
