src/// src/animation.js
import * as THREE from 'three';

export const mixers = new Set();

export function attachAnimations(root, clips, cfg = {}) {
  if (!clips || clips.length === 0) return null;

  const {
    autoplay = true,
    clipName = null,
    loop = 'repeat',       // 'repeat' | 'once' | 'pingpong'
    repetitions = -1,      // -1 => Infinity
    clamp = false
  } = cfg;

  const mixer = new THREE.AnimationMixer(root);
  mixers.add(mixer);

  const clip = clipName
    ? THREE.AnimationClip.findByName(clips, clipName) || clips[0]
    : clips[0];

  const loopMode =
    loop === 'once' ? THREE.LoopOnce :
    loop === 'pingpong' ? THREE.LoopPingPong :
    THREE.LoopRepeat;

  const reps = (repetitions === -1 || repetitions === 'infinite') ? Infinity : Number(repetitions) || 0;

  const action = mixer.clipAction(clip);
  action.setLoop(loopMode, reps);
  action.clampWhenFinished = clamp;
  action.enabled = true;

  if (autoplay) action.reset().play();

  root.userData._anim = { mixer, action, clip, started: !!autoplay };
  return root.userData._anim;
}

export function playAnimation(root) {
  const a = root?.userData?._anim;
  if (!a) return;
  a.action.reset().play();
  a.started = true;
}

export function pauseAnimation(root) {
  const a = root?.userData?._anim;
  if (!a) return;
  a.action.paused = true;
  a.started = false;
}

export function resumeAnimation(root) {
  const a = root?.userData?._anim;
  if (!a) return;
  a.action.paused = false;
  a.started = true;
}

export function updateMixers(delta) {
  mixers.forEach(m => m.update(delta));
}
