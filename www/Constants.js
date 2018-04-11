"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RmxAudioStatusMessageDescriptions = exports.RmxAudioStatusMessage = exports.RmxAudioErrorTypeDescriptions = exports.RmxAudioErrorType = void 0;
var RmxAudioErrorType;
exports.RmxAudioErrorType = RmxAudioErrorType;

(function (RmxAudioErrorType) {
  RmxAudioErrorType[RmxAudioErrorType["RMXERR_NONE_ACTIVE"] = 0] = "RMXERR_NONE_ACTIVE";
  RmxAudioErrorType[RmxAudioErrorType["RMXERR_ABORTED"] = 1] = "RMXERR_ABORTED";
  RmxAudioErrorType[RmxAudioErrorType["RMXERR_NETWORK"] = 2] = "RMXERR_NETWORK";
  RmxAudioErrorType[RmxAudioErrorType["RMXERR_DECODE"] = 3] = "RMXERR_DECODE";
  RmxAudioErrorType[RmxAudioErrorType["RMXERR_NONE_SUPPORTED"] = 4] = "RMXERR_NONE_SUPPORTED";
})(RmxAudioErrorType || (exports.RmxAudioErrorType = RmxAudioErrorType = {}));

;
var RmxAudioErrorTypeDescriptions = ['No Active Sources', 'Aborted', 'Network', 'Failed to Decode', 'No Supported Sources'];
exports.RmxAudioErrorTypeDescriptions = RmxAudioErrorTypeDescriptions;
var RmxAudioStatusMessage;
exports.RmxAudioStatusMessage = RmxAudioStatusMessage;

(function (RmxAudioStatusMessage) {
  RmxAudioStatusMessage[RmxAudioStatusMessage["RMXSTATUS_NONE"] = 0] = "RMXSTATUS_NONE";
  RmxAudioStatusMessage[RmxAudioStatusMessage["RMXSTATUS_REGISTER"] = 1] = "RMXSTATUS_REGISTER";
  RmxAudioStatusMessage[RmxAudioStatusMessage["RMXSTATUS_INIT"] = 2] = "RMXSTATUS_INIT";
  RmxAudioStatusMessage[RmxAudioStatusMessage["RMXSTATUS_ERROR"] = 5] = "RMXSTATUS_ERROR";
  RmxAudioStatusMessage[RmxAudioStatusMessage["RMXSTATUS_LOADING"] = 10] = "RMXSTATUS_LOADING";
  RmxAudioStatusMessage[RmxAudioStatusMessage["RMXSTATUS_CANPLAY"] = 11] = "RMXSTATUS_CANPLAY";
  RmxAudioStatusMessage[RmxAudioStatusMessage["RMXSTATUS_LOADED"] = 15] = "RMXSTATUS_LOADED";
  RmxAudioStatusMessage[RmxAudioStatusMessage["RMXSTATUS_STALLED"] = 20] = "RMXSTATUS_STALLED";
  RmxAudioStatusMessage[RmxAudioStatusMessage["RMXSTATUS_BUFFERING"] = 25] = "RMXSTATUS_BUFFERING";
  RmxAudioStatusMessage[RmxAudioStatusMessage["RMXSTATUS_PLAYING"] = 30] = "RMXSTATUS_PLAYING";
  RmxAudioStatusMessage[RmxAudioStatusMessage["RMXSTATUS_PAUSE"] = 35] = "RMXSTATUS_PAUSE";
  RmxAudioStatusMessage[RmxAudioStatusMessage["RMXSTATUS_PLAYBACK_POSITION"] = 40] = "RMXSTATUS_PLAYBACK_POSITION";
  RmxAudioStatusMessage[RmxAudioStatusMessage["RMXSTATUS_SEEK"] = 45] = "RMXSTATUS_SEEK";
  RmxAudioStatusMessage[RmxAudioStatusMessage["RMXSTATUS_COMPLETED"] = 50] = "RMXSTATUS_COMPLETED";
  RmxAudioStatusMessage[RmxAudioStatusMessage["RMXSTATUS_DURATION"] = 55] = "RMXSTATUS_DURATION";
  RmxAudioStatusMessage[RmxAudioStatusMessage["RMXSTATUS_STOPPED"] = 60] = "RMXSTATUS_STOPPED";
  RmxAudioStatusMessage[RmxAudioStatusMessage["RMX_STATUS_SKIP_FORWARD"] = 90] = "RMX_STATUS_SKIP_FORWARD";
  RmxAudioStatusMessage[RmxAudioStatusMessage["RMX_STATUS_SKIP_BACK"] = 95] = "RMX_STATUS_SKIP_BACK";
  RmxAudioStatusMessage[RmxAudioStatusMessage["RMXSTATUS_TRACK_CHANGED"] = 100] = "RMXSTATUS_TRACK_CHANGED";
  RmxAudioStatusMessage[RmxAudioStatusMessage["RMXSTATUS_PLAYLIST_COMPLETED"] = 105] = "RMXSTATUS_PLAYLIST_COMPLETED";
  RmxAudioStatusMessage[RmxAudioStatusMessage["RMXSTATUS_ITEM_ADDED"] = 110] = "RMXSTATUS_ITEM_ADDED";
  RmxAudioStatusMessage[RmxAudioStatusMessage["RMXSTATUS_ITEM_REMOVED"] = 115] = "RMXSTATUS_ITEM_REMOVED";
  RmxAudioStatusMessage[RmxAudioStatusMessage["RMXSTATUS_PLAYLIST_CLEARED"] = 120] = "RMXSTATUS_PLAYLIST_CLEARED";
  RmxAudioStatusMessage[RmxAudioStatusMessage["RMXSTATUS_VIEWDISAPPEAR"] = 200] = "RMXSTATUS_VIEWDISAPPEAR";
})(RmxAudioStatusMessage || (exports.RmxAudioStatusMessage = RmxAudioStatusMessage = {}));

;
var RmxAudioStatusMessageDescriptions = {
  0: 'No Status',
  1: 'Plugin Registered',
  2: 'Plugin Initialized',
  5: 'Error',
  10: 'Loading',
  11: 'CanPlay',
  15: 'Loaded',
  20: 'Stalled',
  25: 'Buffering',
  30: 'Playing',
  35: 'Paused',
  40: 'Playback Position Changed',
  45: 'Seeked',
  50: 'Playback Completed',
  55: 'Duration Changed',
  60: 'Stopped',
  90: 'Skip Forward',
  95: 'Skip Backward',
  100: 'Track Changed',
  105: 'Playlist Completed',
  110: 'Track Added',
  115: 'Track Removed',
  120: 'Playlist Cleared',
  200: 'DEBUG_View_Disappeared'
};
exports.RmxAudioStatusMessageDescriptions = RmxAudioStatusMessageDescriptions;