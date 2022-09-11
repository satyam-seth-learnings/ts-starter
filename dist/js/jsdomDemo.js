"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const message_1 = __importDefault(require("./message"));
function setMessage() {
    const heading = document.createElement('h1');
    heading.id = 'demo-heading';
    heading.innerText = (0, message_1.default)();
    console.log('run');
    document.querySelector('body').appendChild(heading);
}
exports.default = setMessage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianNkb21EZW1vLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3RzL2pzZG9tRGVtby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHdEQUE4QjtBQUU5QixTQUF3QixVQUFVO0lBQ2hDLE1BQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDN0MsT0FBTyxDQUFDLEVBQUUsR0FBRyxjQUFjLENBQUM7SUFDNUIsT0FBTyxDQUFDLFNBQVMsR0FBRyxJQUFBLGlCQUFLLEdBQUUsQ0FBQztJQUU1QixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ25CLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFFLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ3ZELENBQUM7QUFQRCw2QkFPQyJ9