import { AlignText } from '/constants.js';
import { labeling} from '/data.js';

export var props = {
    isInteractive: false,
    itemLabelRadius: 0.85,
    itemLabelRadiusMax: 0.4,
    itemLabelRotation: 0,
    itemLabelAlign: AlignText.right,
    itemLabelBaselineOffset: -0.13,
    itemBackgroundColors: ['#ff7e00', '#d34f00','#f49939','#fcba70','#df7234'],
    itemLabelColors: ['#000'],
    rotationSpeedMax: 1000,
    rotationResistance: -150,
    lineWidth: 0,
    overlayImage: './imgs/example-2-overlay.svg',
    onRest: outputWheel,
    items: labeling,
  };