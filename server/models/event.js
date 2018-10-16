var mongoose = require("mongoose");
var lodash = require("lodash");

var EventSchema = mongoose.Schema({
    event_id:{
        type:String,
        required: true,
        unique: true
    },
    event_category:{
        type:String,
        required:true
    },
    event_subcategory:{
        type:String,
        required:true
    },
    event_location:{
        longitude:{
            type:String
        },
        latitude:{
            type:String
        },
        address:{
            id:{
                type:String
            },
            city:{
                type:String
            },
            street:{
                type:String
            },
            pin:{
                type:number
            }
        },
        within:{
            type:String
        }
    },
    event_name:{
        type:String
    },
    event_description:{
        type:String
    },
    event_image_url:{
        type:URL
    },
    event_start_date:{
        type:Date
    },
    event_last_date:{
        type:Date
    },
    event_start_time:{
        type:Date
    },
    event_end_time:{
        type:Date
    },
    event_min_age:{
        type:String
    },
    event_max_age:{
        type:String
    },
    event_price:{
        type:String
    },
    event_booking:{
        url:{
            type:String
        },
        inquiry_url:{
            type:String
        }
    },
    event_organizer:{
        name:{
            type:String
        },
        url:{
            type:String
        }
    }
})


EventSchema.statics.findcategories = function(){
    Event.find().distinct('event_category', function(err, results) {
        if(err){
            return error;
        }
        return results;
    })
}

var Event = mongoose.model('Events', EventSchema);



module.exports = {
    Event
};

