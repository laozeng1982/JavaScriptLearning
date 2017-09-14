function formatTimeToString(date) {
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();

    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();

    return [year, month, day].map(formatNumber).join('-') + ' ' + [hour, minute, second].map(formatNumber).join(':');
}

function formatNumber(n) {
    n = n.toString();
    return n[1] ? n : '0' + n;
}

class log {
    constructor() {

    }

    info() {
        let time = formatTimeToString(new Date());
        let stack = (new Error()).stack.split("\n")[2].replace(/(^\s*)|(\s*$)/g, "") + "-->";

        let msg = this.getMsg(arguments);

        console.log(time, stack, msg);
    }

    trace() {
        let stack = (new Error()).stack.split("\n")[2].replace(/(^\s*)|(\s*$)/g, "");
        let name = stack.toString().split(" ")[0] + " " + stack.split(" ")[1] + ":";

        let msg = this.getMsg(arguments);

        console.log(stack);
        console.log(name, msg);
    }

    getMsg(args) {
        var msg = "";
        for (var idx = 0; idx < args.length - 1; idx++) {
            msg = msg + args[idx].toString() + ", ";
        }

        msg = msg + args[args.length - 1];

        return msg;
    }


}


module.exports = {
    log: log,
    formatTimeToString: formatTimeToString
};