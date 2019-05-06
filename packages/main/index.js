import testHositing from 'hoistExample-ts';
import failurtestHositingRollup, {workingtestHositingRollup, failurtestHositingRollup2} from 'hoistExample-rollup';

testHositing.create();

try{
  failurtestHositingRollup.create();
} catch ( e ) {
  console.log('failurtestHositingRollup', e);
}


try{
  workingtestHositingRollup.create();
} catch ( e ) {
  console.log('workingtestHositingRollup', e);
}

try{
  failurtestHositingRollup2.create();
} catch ( e ) {
  console.log('failurtestHositingRollup2', e);
}
