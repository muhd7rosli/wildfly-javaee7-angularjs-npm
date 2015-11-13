package org.wildfly.jaxrs;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;

/**
 * Copyright 2015 Muhammad bin Rosli
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @author Muhammad Rosli <muhd7rosli@live.com>
 *
 * This is a simple REST API class to respond greeting message.
 */
@Path("/helloworld")
public class HelloWorldResource {
    // These method will process HTTP GET requests
    // The Java method will produce content identified by the MIME Media

    /**
     * Method to return text/plain request
     * @return
     */
    @GET
    @Produces("application/json")
    public String getJsonMessage() {
        // return some cliched textual content
        return "{\"info\": \"Welcome to the demo of Wildfly, Java EE7 and AngularJS. This message is " +
                "served using REST API and consumed by AngularJS.\"}";
    }

}
