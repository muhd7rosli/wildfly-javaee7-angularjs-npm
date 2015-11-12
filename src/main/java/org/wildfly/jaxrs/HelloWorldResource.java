package org.wildfly.jaxrs;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;

/**
 * Created by Muhammad on 11/11/2015.
 */

// This class is located at "/helloworld"
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
        return "{\"info\": \"Welcome to the demo of Wildfly, Java EE7 and AngularJS. This message is retrieved" +
                "serve using REST API and consume by AngularJS.\"}";
    }

}
