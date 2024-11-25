var APP_DATA = {
  "scenes": [
    {
      "id": "0-salon",
      "name": "Salon",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 3.100473338108981,
        "pitch": 0.1681173746801008,
        "fov": 1.4585144351731572
      },
      "linkHotspots": [
        {
          "yaw": 2.091319888477665,
          "pitch": 0.07081284861621207,
          "rotation": 0,
          "target": "1-cocina"
        },
        {
          "yaw": 2.8323520689761024,
          "pitch": 0.056083883666477874,
          "rotation": 5.497787143782138,
          "target": "2-salon-escaleras"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-cocina",
      "name": "Cocina",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 1.5519056610419248,
        "pitch": 0.3016675533480324,
        "fov": 1.4585144351731572
      },
      "linkHotspots": [
        {
          "yaw": -0.3727918519695166,
          "pitch": 0.34668284296966156,
          "rotation": 0,
          "target": "0-salon"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-salon-escaleras",
      "name": "Salon escaleras",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.9434940052612095,
        "pitch": 0.04828615404123937,
        "fov": 1.4585144351731572
      },
      "linkHotspots": [
        {
          "yaw": 0.5798024736934693,
          "pitch": 0.17889809042682003,
          "rotation": 0,
          "target": "0-salon"
        },
        {
          "yaw": 1.8459411047942762,
          "pitch": 0.09483379097035538,
          "rotation": 1.5707963267948966,
          "target": "1-cocina"
        },
        {
          "yaw": 3.134608879374274,
          "pitch": -0.0448718219508315,
          "rotation": 0,
          "target": "4-pasillo-escaleras-primera-planta"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-bao",
      "name": "Baño",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -1.2682002279261297,
        "pitch": 0.38815428408820196,
        "fov": 1.4585144351731572
      },
      "linkHotspots": [
        {
          "yaw": 0.6985859434987347,
          "pitch": 0.35171231684052984,
          "rotation": 0.7853981633974483,
          "target": "4-pasillo-escaleras-primera-planta"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-pasillo-escaleras-primera-planta",
      "name": "Pasillo escaleras primera planta",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 2.656412555195474,
        "pitch": 0.4221972891515957,
        "fov": 1.4585144351731572
      },
      "linkHotspots": [
        {
          "yaw": 2.1531932633192072,
          "pitch": 0.8152862728649666,
          "rotation": 0.7853981633974483,
          "target": "2-salon-escaleras"
        },
        {
          "yaw": -2.9682661078584758,
          "pitch": 0.27004627378024537,
          "rotation": 0,
          "target": "11-terraza"
        },
        {
          "yaw": 1.0101362678479902,
          "pitch": 0.2746234252550579,
          "rotation": 4.71238898038469,
          "target": "3-bao"
        },
        {
          "yaw": -1.7890799165469389,
          "pitch": 0.02100926596418695,
          "rotation": 0,
          "target": "8-pasillo-habitaciones-primera-planta"
        },
        {
          "yaw": -1.6975563408033505,
          "pitch": 0.4242685202766001,
          "rotation": 1.5707963267948966,
          "target": "5-habitacion-1"
        },
        {
          "yaw": -1.9422359516216563,
          "pitch": 0.4118869834211978,
          "rotation": 4.71238898038469,
          "target": "7-habitacion-2"
        },
        {
          "yaw": -1.875665095333332,
          "pitch": 0.18508436820602547,
          "rotation": 10.995574287564278,
          "target": "9-habitacion-3"
        },
        {
          "yaw": -1.738259005799918,
          "pitch": 0.1900614490620942,
          "rotation": 1.5707963267948966,
          "target": "9-habitacion-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-habitacion-1",
      "name": "habitacion 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -2.949723932949361,
        "pitch": 0.3415345069760676,
        "fov": 1.4585144351731572
      },
      "linkHotspots": [
        {
          "yaw": 2.918723258810491,
          "pitch": 0.03883994266741908,
          "rotation": 0,
          "target": "9-habitacion-3"
        },
        {
          "yaw": 1.0557336319836352,
          "pitch": 0.40089685184083024,
          "rotation": 0,
          "target": "7-habitacion-2"
        },
        {
          "yaw": 0.5612835730164321,
          "pitch": 0.36813939499794657,
          "rotation": 4.71238898038469,
          "target": "4-pasillo-escaleras-primera-planta"
        },
        {
          "yaw": 1.3001703228349335,
          "pitch": 0.3771870495423375,
          "rotation": 1.5707963267948966,
          "target": "8-pasillo-habitaciones-primera-planta"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-jacuzzy",
      "name": "jacuzzy",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -1.2096948805578513,
        "pitch": 0.576033790617009,
        "fov": 1.4585144351731572
      },
      "linkHotspots": [
        {
          "yaw": -1.0382258304246026,
          "pitch": 0.8228594395060043,
          "rotation": 0,
          "target": "11-terraza"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-habitacion-2",
      "name": "habitacion 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.3078126135335406,
        "pitch": 0.47760458009341633,
        "fov": 1.4585144351731572
      },
      "linkHotspots": [
        {
          "yaw": -2.8305642713200108,
          "pitch": 0.18448106470064118,
          "rotation": 0,
          "target": "10-habitacion-4"
        },
        {
          "yaw": -0.6183041718615527,
          "pitch": 0.46135309848286,
          "rotation": 0,
          "target": "5-habitacion-1"
        },
        {
          "yaw": -0.21556835316367184,
          "pitch": 0.24320909575448546,
          "rotation": 1.5707963267948966,
          "target": "4-pasillo-escaleras-primera-planta"
        },
        {
          "yaw": -0.7445719064578871,
          "pitch": 0.3181333223158056,
          "rotation": 4.71238898038469,
          "target": "8-pasillo-habitaciones-primera-planta"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-pasillo-habitaciones-primera-planta",
      "name": "pasillo habitaciones primera planta",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "9-habitacion-3",
      "name": "habitacion 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.19435070983713132,
        "pitch": 0.3843703351277341,
        "fov": 1.4585144351731572
      },
      "linkHotspots": [
        {
          "yaw": -0.4726141216201185,
          "pitch": 0.20961582009057622,
          "rotation": 0,
          "target": "5-habitacion-1"
        },
        {
          "yaw": 1.052739688195743,
          "pitch": 0.2000352014936695,
          "rotation": 0,
          "target": "10-habitacion-4"
        },
        {
          "yaw": 1.2673314325948652,
          "pitch": 0.2192014593460243,
          "rotation": 4.71238898038469,
          "target": "8-pasillo-habitaciones-primera-planta"
        },
        {
          "yaw": 0.8157822656746614,
          "pitch": 0.2472719799676888,
          "rotation": 4.71238898038469,
          "target": "4-pasillo-escaleras-primera-planta"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-habitacion-4",
      "name": "habitacion 4",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 2.7639776026894776,
        "pitch": 0.47573495111617525,
        "fov": 1.4585144351731572
      },
      "linkHotspots": [
        {
          "yaw": -3.0630215391003475,
          "pitch": 0.06018199305613514,
          "rotation": 0,
          "target": "7-habitacion-2"
        },
        {
          "yaw": 1.3819587033760428,
          "pitch": 0.3649484925627444,
          "rotation": 0,
          "target": "9-habitacion-3"
        },
        {
          "yaw": 1.0744320482798884,
          "pitch": 0.14045278458534582,
          "rotation": 1.5707963267948966,
          "target": "8-pasillo-habitaciones-primera-planta"
        },
        {
          "yaw": 1.6513751639472218,
          "pitch": 0.12080339337065915,
          "rotation": 1.5707963267948966,
          "target": "4-pasillo-escaleras-primera-planta"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-terraza",
      "name": "terraza",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 2.437705528655746,
        "pitch": 0.4084615894735606,
        "fov": 1.4585144351731572
      },
      "linkHotspots": [
        {
          "yaw": 1.8211510399430493,
          "pitch": 0.43948483701546515,
          "rotation": 4.71238898038469,
          "target": "4-pasillo-escaleras-primera-planta"
        },
        {
          "yaw": 0.1536423376869127,
          "pitch": 0.8458100407516085,
          "rotation": 0,
          "target": "6-jacuzzy"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
