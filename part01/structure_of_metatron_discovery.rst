Structure of metatron Discovery
------------------------------------

metatron Discovery imports data from a data source ingested in the metatron operation
server or other external data sources, analyzes it using various advanced analysis
functions, and outputs the result as various charts and reports. To utilize this
module, you must understand the overall structure shown below.

.. figure:: /_static/img/part01/structure_of_metatron_discovery.png
   :alt: Structure of metatron Discovery


**Source Data**

Data imported when creating the data source. The current metatron version supports
file type, databases, and staging DB type.


**Data Preparation & Ingestiona**

Refines and processes imports from source data, and then ingests them to metatron’s
Hive storage or exports them into local files.


**Data Storagea**

Saves data to the Druid engine of metatron based on multi-dimensional OLAP.
Data saved as this type facilitates easy visualization and analysis.

.. Note::
  See Section 3.2 for more information.


**Data Analytics & Visualization**

Searches, analyzes and visualizes data stored in data storage.

- **Workspace**: Space to create and manages workbooks, workbenches, and notebooks.
- **Workbook**: Analyzes multi-dimensional, time-stamped data sources stored in
  the Druid engine and visualizes and reports the results.
- **Notebook**: Able to perform advanced analysis such as deep learning or machine
  learning by linking external analytics tools including R, Python, and Scala.
- **Workbench**: Performs an SQL-based analysis.


**Data monitoring**

Monitors various data logs generated in metatron’s Staging DB (internal Hive DB)
and workbench (external DB).


**User Permission and Account**

Adds and deletes metatron Discovery users, or manages user permission.
