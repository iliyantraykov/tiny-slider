import { isServer } from './isServer.js';

export var classListSupport = isServer ? null : 'classList' in document.createElement('_');