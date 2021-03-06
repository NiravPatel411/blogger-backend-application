"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
// Angular
var core_1 = require("@angular/core");
// Partials for CRUD
var crud_1 = require("../../../../views/partials/content/crud");
var MessageType;
(function (MessageType) {
    MessageType[MessageType["Create"] = 0] = "Create";
    MessageType[MessageType["Read"] = 1] = "Read";
    MessageType[MessageType["Update"] = 2] = "Update";
    MessageType[MessageType["Delete"] = 3] = "Delete";
})(MessageType = exports.MessageType || (exports.MessageType = {}));
var LayoutUtilsService = /** @class */ (function () {
    /**
     * Service constructor
     *
     * @param snackBar: MatSnackBar
     * @param dialog: MatDialog
     */
    function LayoutUtilsService(snackBar, dialog) {
        this.snackBar = snackBar;
        this.dialog = dialog;
    }
    /**
     * Showing (Mat-Snackbar) Notification
     *
     * @param message: string
     * @param type: MessageType
     * @param duration: number
     * @param showCloseButton: boolean
     * @param showUndoButton: boolean
     * @param undoButtonDuration: number
     * @param verticalPosition: 'top' | 'bottom' = 'top'
     */
    LayoutUtilsService.prototype.showActionNotification = function (message, type, duration, showCloseButton, showUndoButton, undoButtonDuration, verticalPosition) {
        if (type === void 0) { type = MessageType.Create; }
        if (duration === void 0) { duration = 10000; }
        if (showCloseButton === void 0) { showCloseButton = true; }
        if (showUndoButton === void 0) { showUndoButton = true; }
        if (undoButtonDuration === void 0) { undoButtonDuration = 3000; }
        if (verticalPosition === void 0) { verticalPosition = 'bottom'; }
        var data = {
            message: message,
            snackBar: this.snackBar,
            showCloseButton: showCloseButton,
            showUndoButton: showUndoButton,
            undoButtonDuration: undoButtonDuration,
            verticalPosition: verticalPosition,
            type: type,
            action: 'Undo'
        };
        return this.snackBar.openFromComponent(crud_1.ActionNotificationComponent, {
            duration: duration,
            data: data,
            verticalPosition: verticalPosition
        });
    };
    /**
     * Showing Confirmation (Mat-Dialog) before Entity Removing
     *
     * @param title: string
     * @param description: string
     * @param waitDescription: string
     */
    LayoutUtilsService.prototype.deleteElement = function (title, description, waitDescription) {
        if (title === void 0) { title = ''; }
        if (description === void 0) { description = ''; }
        if (waitDescription === void 0) { waitDescription = ''; }
        return this.dialog.open(crud_1.DeleteEntityDialogComponent, {
            data: { title: title, description: description, waitDescription: waitDescription },
            width: '440px'
        });
    };
    /**
     * Showing Fetching Window(Mat-Dialog)
     *
     * @param data: any
     */
    LayoutUtilsService.prototype.fetchElements = function (data) {
        return this.dialog.open(crud_1.FetchEntityDialogComponent, {
            data: data,
            width: '600px'
        });
    };
    /**
     * Showing Update Status for Entities Window
     *
     * @param title: string
     * @param statuses: string[]
     * @param messages: string[]
     */
    LayoutUtilsService.prototype.updateStatusForEntities = function (title, statuses, messages) {
        return this.dialog.open(crud_1.UpdateStatusDialogComponent, {
            data: { title: title, statuses: statuses, messages: messages },
            width: '600px'
        });
    };
    LayoutUtilsService = __decorate([
        core_1.Injectable()
    ], LayoutUtilsService);
    return LayoutUtilsService;
}());
exports.LayoutUtilsService = LayoutUtilsService;
